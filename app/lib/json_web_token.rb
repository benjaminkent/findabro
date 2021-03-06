require "net/http"
require "uri"

class JSONWebToken
  def self.verify(token)
    JWT.decode(token, nil,
              true,
              algorithm: "RS256",
              iss: "https://benjaminkentjehl.auth0.com/",
              verify_iss: true) do |header|
      jwks_hash[header["kid"]]
    end
  end

  def self.jwks_hash
    @jwks_hash ||= begin
      jwks_raw = Net::HTTP.get URI("https://benjaminkentjehl.auth0.com/.well-known/jwks.json")
      jwks_keys = Array(JSON.parse(jwks_raw)["keys"])
      Hash[
        jwks_keys
          .map do |k|
          [
            k["kid"],
            OpenSSL::X509::Certificate.new(
              Base64.decode64(k["x5c"].first)
            ).public_key
          ]
        end
      ]
    end
  end
end